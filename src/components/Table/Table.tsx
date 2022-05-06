import { Client } from '@src/core';
import { IconEdit, IconTrash } from '../Icons/Icons';
import * as Style from './Table.style';

interface TableProps {
  clients: Client[]
  clientSelect?: (clientFocus: Client) => void
  clientDeleted?: (clientFocus: Client) => void
}

const Table = (props: TableProps) => {
  const displayActions = props.clientDeleted || props.clientSelect;

  const renderTh = () => {
    return (
      <tr>
        <Style.Th>Código</Style.Th>
        <Style.Th>Nome</Style.Th>
        <Style.Th>Idade</Style.Th>
        {displayActions ? <Style.ThActions>Ações</Style.ThActions> : false}
      </tr>
    );
  };

    const renderActions = (clientAction : Client) => {
    return (
      <>
        {props.clientSelect ? (
          <Style.ButtonEdit onClick={() => props.clientSelect?.(clientAction)}>
            {IconEdit}
          </Style.ButtonEdit>
        ) : false}
        {props.clientDeleted ? (
          <Style.ButtonDelete onClick={() => props.clientDeleted?.(clientAction)}>
            {IconTrash}
          </Style.ButtonDelete>
        ) : false}
      </>
    );
  };

  const renderTd = () => {
    return props.clients?.map((clientMap, idMap) => {
      if(idMap % 2 === 0) {
        return(
          <Style.TrTbody2 key={clientMap.id}>
            <Style.Td>{clientMap.id}</Style.Td>
            <Style.Td>{clientMap.name}</Style.Td>
            <Style.Td>{clientMap.age}</Style.Td>
            {displayActions ? <Style.TdButton>{renderActions(clientMap)}</Style.TdButton> : false}
          </Style.TrTbody2>
        );
      } else {
        return (
          <Style.TrTbody1 key={clientMap.id}>
            <Style.Td>{clientMap.id}</Style.Td>
            <Style.Td>{clientMap.name}</Style.Td>
            <Style.Td>{clientMap.age}</Style.Td>
            {displayActions ? <Style.TdButton>{renderActions(clientMap)}</Style.TdButton> : false}
          </Style.TrTbody1>
        );
      }
      });
  };

  return (
    <Style.Table>
      <Style.Thead>
        {renderTh()}
      </Style.Thead>
      <tbody>
        {renderTd()}
      </tbody>
    </Style.Table>
  );
};

export default Table;
