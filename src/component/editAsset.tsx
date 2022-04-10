import React, { useState, useEffect } from "react";
import { IAsset } from "../interface";

interface IProps {
  asset: IAsset;
  onUpdateAsset: (id: any, asset: IAsset) => void;
  setEdit: (bool: boolean) => void;
}

export default function EditAssetForm(props: IProps) {
  const [asset, setAsset] = useState(props.asset);
  useEffect(() => setAsset(props.asset), [props]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!asset.id) {
      console.log("em");
      return false;
    }
    props.onUpdateAsset(asset.id, asset);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAsset({ ...asset, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>Edit Asset</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        {/* <div className="form-row">
          <label>Asset Id</label>
          <input
            type="text"
            placeholder="please input id"
            name="id"
            value={asset.id}
            onChange={onInputChange}
          />
        </div> */}
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={asset.name}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Serial No</label>
          <input
            type="text"
            placeholder="please input serialNo"
            name="serialNo"
            value={asset.serialNo}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Assign Date</label>
          <input
            type="date"
            placeholder="please input AssignDate"
            name="assignDate"
            value={asset.assignDate}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>Update</button>
          <button onClick={() => props.setEdit(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
