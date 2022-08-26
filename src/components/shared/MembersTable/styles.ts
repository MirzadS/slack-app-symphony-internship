import styled from 'styled-components';

interface Props {
    image: string;
}

export const ProfileImg = styled.img<Props>`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MembersBox = styled.section`
    padding: 37px 0 37px 50px;
    background: #fff;
    border: 1px solid #dad9d9;
    box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.06);
    border-radius: 10px;

    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 36px;
        color: #000000;
    }
`;

export const TableContent = styled.div``;

export const TableBox = styled.table`
    margin-top: 31px;
    width: 100%;
    table-layout: fixed;
    cellPadding=0;
    cellSpacing=0;
    border=0
`;

export const Table = styled.table`
    margin-top: 5px;
    width: 100%;
    table-layout: fixed;
    cellPadding=0;
    cellSpacing=0;
    border=0
`;

export const TableHeader = styled.th`
    padding: 5px 0px;
    text-align: left;
    border-bottom: 2px solid #ebebeb;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
    color: #787878;
`;

export const TableData = styled.td`
    display: flex;
    align-items: center;
    gap: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 400;
    font-size: 13px;
    color: #1e1e1e;
    padding-right: 50px;
`;

export const TableHeaderRow = styled.tr`
    display: grid;
    grid-template-columns: 30% 30% 20% 20%;
`;

export const TableRow = styled.tr`
    display: grid;
    height: 65px;
    grid-template-columns: 30% 30% 20% 20%;
    align-items: center;
`;

export const TableBody = styled.tbody`
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
`;
