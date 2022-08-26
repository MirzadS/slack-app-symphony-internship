import styled from 'styled-components';

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

export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 30% 50% 20%;
    cursor: pointer;
`;

export const TableBody = styled.tbody``;
