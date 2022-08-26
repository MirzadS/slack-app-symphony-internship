import styled from 'styled-components';

export const ChannelsPage = styled.div`
    width: 100vw;
    height: 100%;
    background-color: #f6f6f6;
    display: flex;
`;

export const Section = styled.section`
    padding: 40px;
    background: #fff;
    border: 1px solid #dad9d9;
    box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
`;

export const TableContent = styled.div`
    height: 450px;
    overflow-x: auto;
`;

export const Table = styled.table`
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
    padding-top: 48px;
    text-align: left;
    vertical-align: middle;
    font-weight: 400;
    font-size: 13px;
    color: #1e1e1e;
    padding-right: 50px;
`;

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-right: 84px;
    padding-bottom: 100px;
    margin-left: 58px;
    margin-top: 100px;
`;

export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 30% 50% 20%;
`;

export const TableBody = styled.tbody``;
