/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ModalProps, FormValues } from './types';
import ChannelService from '../../services/ChannelService/ChannelService';
import { CHANNELS } from '../../routes/constants/constants';

import ERROR_MSG from './constants';
import {
    ModalOverlay,
    ModalWrapper,
    Title,
    Form,
    FormData,
    FormButtons,
    InputCheckbox,
    ErrorBanner,
    ErrMsg,
} from './styles';

const schema = yup.object().shape({
    channelNameForm: yup.string().required('This field is required.'),
    channelCheckboxForm: yup.string().required(),
});

function Modal({ isVisible, hide }: ModalProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const [channelErrorMsg, setChannelErrorMsg] = useState<string>(ERROR_MSG.other);
    const [channelError, setChannelError] = useState<boolean>(false);

    const closeModal = (): void => {
        setChannelError(false);

        reset();
        hide();
    };

    const onSubmitHandler = async (data: FormValues) => {
        const response = await ChannelService.createNewChannel({
            channelName: data.channelNameForm,
            isPrivate: data.channelCheckboxForm,
        });

        if (response.ok) {
            window.open(CHANNELS, '_self');
            closeModal();
        } else {
            setChannelErrorMsg(ERROR_MSG[response.error as keyof typeof ERROR_MSG]);
            setChannelError(true);
        }
        reset();
    };

    return isVisible
        ? ReactDOM.createPortal(
              <>
                  <ModalOverlay />
                  <ModalWrapper
                      modalHeight={channelError ? '510px' : '420px'}
                      aria-modal
                      aria-hidden
                      tabIndex={-1}
                      role="dialog"
                  >
                      <Title>New Channel</Title>

                      <Form onSubmit={handleSubmit(onSubmitHandler)}>
                          <FormData>
                              <label htmlFor="channelName">Channel Name</label>
                              <input
                                  type="text"
                                  {...register('channelNameForm')}
                                  id="channelName"
                                  onClick={() => setChannelError(false)}
                              />

                              {errors.channelNameForm && <ErrMsg>{errors.channelNameForm.message}</ErrMsg>}

                              <InputCheckbox>
                                  <input type="checkbox" {...register('channelCheckboxForm')} />
                                  <label> Private </label>
                              </InputCheckbox>
                          </FormData>

                          {channelError && (
                              <ErrorBanner>
                                  <span>Something Went Wrong</span>
                                  <span>{channelErrorMsg}</span>
                              </ErrorBanner>
                          )}

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

export default Modal;
