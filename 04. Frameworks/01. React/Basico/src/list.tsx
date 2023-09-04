import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Dialog, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DetailPage } from "./detail";

const defaultOrganization = "lemoncode";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}
interface RowEntity {
  id: string;
  col1: string;
  col2: string;
}

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => (
      <img src={params.value} className="datagrid-images" />
    ),
  },
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "col2",
    headerName: "Name",
    width: 150,
  },
];

const useGetMembers = (defaultOrganization: string) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const getMembers = (organization: string) => {
    members.shift();
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  React.useEffect(() => {
    defaultOrganization && getMembers(defaultOrganization);
  }, []);
  return { members, getMembers };
};

export const ListPage: React.FC = () => {
  const [organization, setOrganization] =
    React.useState<string>(defaultOrganization);
  const [membersRows, setMembersRows] = React.useState<RowEntity[]>([]);
  const { members, getMembers } = useGetMembers(organization);
  const [selectedRowId, setSelectedRowId] = React.useState<string>("");
  React.useEffect(() => {
    setMembersRows(
      members.map((member) => ({
        id: member.id,
        col1: member.avatar_url,
        col2: member.login,
      }))
    );
  }, [members]);

  const { page } = useParams();
  const numpage = Number(page);

  return (
    <div className="list-page">
      <div className="list-header">
        <div className="list-search">
          <TextField
            size="small"
            label="Organización"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            size="small"
            onClick={() => getMembers(organization)}
          >
            Buscar
          </Button>
        </div>
      </div>
      <div>
        <DataGrid
          onRowClick={(e) => setSelectedRowId(e.row.col2)}
          rows={membersRows}
          columns={columns}
          pageSizeOptions={[10, 20, 50, 100]}
        ></DataGrid>
        {selectedRowId && (
          <Dialog open={!!selectedRowId} onClose={() => setSelectedRowId("")}>
            <DetailPage id={selectedRowId} />
          </Dialog>
        )}
      </div>
    </div>
  );
};
