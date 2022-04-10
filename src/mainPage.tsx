import React, { useState } from "react";
import AddUAssetForm from "./component/addAsset";
import EditAssetForm from "./component/editAsset";
import AssetTable from "./component/assetTable";
import { IBaseAsset, IAsset } from "./interface";
import "../src/style.css";

const defaultAssets: Array<IAsset> = [
  {
    id: "1",
    name: "Asset 1",
    serialNo: "12345",
    assignDate: "2022-04-01",
  },
  {
    id: "2",
    name: "Asset 2",
    serialNo: "12345",
    assignDate: "2022-04-02",
  },
  {
    id: "3",
    name: "Asset 3",
    serialNo: "12345",
    assignDate: "2022-04-03",
  },
];
const initCurrentAsset: IAsset = {
  id: "",
  name: "",
  serialNo: "",
  assignDate: "",
};
export interface IMainPageProps {}

const MainPage: React.FunctionComponent<IMainPageProps> = (_props) => {
  const [assets, setAssets] = useState(defaultAssets);
  const [editAsset, setEditAsset] = useState(initCurrentAsset);
  const [editing, setEdit] = useState(false);
  const onAddAsset = (newAsset: IBaseAsset) => {
    const id = assets.length + 1;
    setAssets([...assets, { ...newAsset, id }]);
  };
  const onCurrentAsset = (asset: IAsset) => {
    setEditAsset(asset);
    setEdit(true);
  };
  const onUpdateAsset = (id: number, newAsset: IAsset) => {
    setEdit(false);
    setAssets(assets.map((i) => (i.id === id ? newAsset : i)));
  };
  const onDeleteAsset = (currentAsset: IAsset) => {
    setAssets(assets.filter((i) => i.id !== currentAsset.id));
  };

  return (
    <div>
      <div className="App">
        <div className="user-flex-wrapper">
          {editing ? (
            <EditAssetForm
              asset={editAsset}
              onUpdateAsset={onUpdateAsset}
              setEdit={setEdit}
            />
          ) : (
            <AddUAssetForm onAddAsset={onAddAsset} />
          )}

          <AssetTable
            assets={assets}
            onEdit={onCurrentAsset}
            onDelete={onDeleteAsset}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
