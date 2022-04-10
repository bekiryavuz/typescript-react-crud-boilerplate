import React, { useState } from "react";
import { IBaseAsset } from "../interface";

interface IProps {
  onAddAsset: (asset: IBaseAsset) => void;
}
const initAsset = { id: "", name: "", serialNo: "", assignDate: "" };
const AddAssetForm: React.FunctionComponent<IProps> = (props) => {
  const [formValue, setFormValue] = useState(initAsset);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.onAddAsset(formValue);
    setFormValue(initAsset);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>Add assets</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Serial No</label>
          <input
            type="text"
            placeholder="please input serialNo"
            name="serialNo"
            value={formValue.serialNo}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Assign Date</label>
          <input
            type="date"
            placeholder="please input assignDate"
            name="assignDate"
            value={formValue.assignDate}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>Add new asset</button>
        </div>
      </form>
    </div>
  );
};
export default AddAssetForm;
