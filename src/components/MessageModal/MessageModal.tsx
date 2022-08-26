/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalProps, FormValues } from './types';
import MessageService from '../../services/MessageService/MessageService';
import helperMessageModal from './helpers';

import { ModalOverlay, ModalWrapper, Title, Form, FormData, FormButtons, ErrMsg } from './styles';

const schema = yup.object().shape({
    titleForm: yup.string(),
    messageForm: yup.string().required('This field is required.'),
});

function MessageModal({ isVisible, hide, channelID, setCorrectModal }: ModalProps) {
    const [listOfChannelNames, setListOfChannelNames] = useState([]);

    const getChannelsInfo = async () => {
        const response = await MessageService.getAllChannelNamesAndIDs();

        setListOfChannelNames(response);
    };

    useEffect(() => {
        if (listOfChannelNames.length === 0) {
            getChannelsInfo();
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const closeModal = (): void => {
        reset();
        setCorrectModal(false);
        hide();
    };

    const onSubmitHandler = async (data: FormValues) => {
        const response = await MessageService.sendMessage({
            channelID: channelID || data.channelIDForm,
            blocks: JSON.stringify(helperMessageModal(data.titleForm, data.messageForm)),
        });

        reset();
        hide();

        if (response) {
            Swal.fire({
                icon: 'success',
                title: 'Message sent successfully!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'Message not sent',
            });
        }
    };

    return isVisible
        ? ReactDOM.createPortal(
              <>
                  <ModalOverlay />
                  <ModalWrapper
                      modalHeight={channelID ? '510px' : '615px'}
                      aria-modal
                      aria-hidden
                      tabIndex={-1}
                      role="dialog"
                  >
                      <Title>Post Message</Title>

                      <Form onSubmit={handleSubmit(onSubmitHandler)}>
                          <FormData>
                              {!channelID && (
                                  <>
                                      <label htmlFor="channel">Channel</label>

                                      <select {...register('channelIDForm')} id="channel">
                                          {listOfChannelNames.map((channel: any) => (
                                              <option value={channel.id}>{channel.name}</option>
                                          ))}
                                      </select>

                                      {errors.channelIDForm && <ErrMsg>{errors.channelIDForm.message}</ErrMsg>}
                                  </>
                              )}

                              <label htmlFor="title">Title</label>
                              <input type="text" {...register('titleForm')} id="title" />

                              <label htmlFor="message">Message</label>
                              <textarea id="message" {...register('messageForm')} />

                              {errors.messageForm && <ErrMsg>{errors.messageForm.message}</ErrMsg>}
                          </FormData>

                          <FormButtons>
                              <input type="button" value="Cancel" onClick={closeModal} />
                              <input type="submit" value="Create" />
                          </FormButtons>
                      </Form>
                  </ModalWrapper>
              </>,
              document.body
          )
        : null;
}

MessageModal.defaultProps = {
    setCorrectModal: () => null,
};

export default MessageModal;
