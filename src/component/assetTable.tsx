import React from "react";
import { IAsset } from "../interface";
import { Snackbar, Button } from "@mui/material";
import { useState } from "react";

interface IProps {
  assets: Array<IAsset>;
  onEdit: (asset: IAsset) => void;
  onDelete: (asset: IAsset) => void;
}

const AssetTable: React.FunctionComponent<IProps> = (props) => {
  function foo(
    id: number | string,
    name: string,
    serialNo: string,
    assignDate: string
  ) {
    alert(
      `This is  ${name} with id ${id} and serial number ${serialNo} and assign date ${assignDate}`
    );
  }
  const [open, setOpen] = useState(false);
  const [currentObj, setCurrentObj] = useState({} as IAsset);
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSnackbar = (asset: IAsset) => {
    setCurrentObj(asset);
    setOpen(true);
  };

  return (
    <div className="user-table">
      <h1>View Assets</h1>
      <table>
        <thead>
          <tr>
            <th>Asset Id</th>
            <th>Asset Name</th>
            <th>Asset Serial No</th>
            <th>Asset Assign Date</th>
            <th>Asset Details</th>
          </tr>
        </thead>
        <tbody>
          <Snackbar
            message={`This is  ${currentObj.name} with id ${currentObj.id} 
            \ serial number ${currentObj.serialNo} and assign date ${currentObj.assignDate} `}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />
          {props.assets.length > 0 ? (
            props.assets.map((i) => (
              <tr key={i.id}>
                <td>{i["id"]}</td>
                <td>{i["name"]}</td>
                <td>{i["serialNo"]}</td>
                <td>{i["assignDate"]}</td>
                <td>
                  <Button onClick={() => handleSnackbar(i)}>{i.name}</Button>
                </td>
                <td>
                  <button
                    onClick={() => foo(i.id, i.name, i.serialNo, i.assignDate)}
                  >
                    details
                  </button>
                  <button onClick={() => props.onEdit(i)}>edit</button>
                  <button onClick={() => props.onDelete(i)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>
                <strong>There is no assets at the moment</strong>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default AssetTable;
