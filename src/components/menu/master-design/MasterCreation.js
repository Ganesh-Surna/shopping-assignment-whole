
import { useState } from "react";
import CreationTable from "./CreationTable";
import classes from "./MasterCreation.module.css";
import Below from "../../../UI/below-header";
import SelectComponent from "./Select";
import InputComponent from "./Input";

export default function MasterCreation(){
    const [data, setData]= useState([]);

    function handleSubmit(event){
        event.preventDefault();
        const form= new FormData(event.target);
        const formData=Object.fromEntries(form);
        const { type, stoneGroup, stoneWt, pcs } = formData;
        const index= data.length + 1;
        const formattedData= {Sno: index, type, stoneGroup, stoneWt, pcs, UOM:"Grms"};
        setData((prevState)=>[...prevState, formattedData]);
    }

    return <Below>
        <header className={classes.header}>
            <p>Master Design Creation</p>
        </header>
        <div className={classes.below}>
            <fieldset>
                <legend>Entry Details</legend>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.date} type="date"/>
                    <section className={classes.fields}>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Main Group</label>
                            {/* <select name="main-group" defaultValue="Diamond">
                                <option value="Diamond">Diamond</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option> 
                            </select> */}
                            <SelectComponent
                                placeholder={"Select main group"}
                                options={[
                                    {
                                        value: "gold",
                                        label: "Gold"
                                    },
                                    {
                                        value: "diamond",
                                        label: "Diamond"
                                    },
                                    {
                                        value: "silver",
                                        label: "Silver"
                                    }
                                ]}
                                name="main-group"
                            />
                            
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Category</label>
                            {/* <select name="category" defaultValue="Diamond Jewellery">
                                <option value="Diamond Jewellery">Diamond Jewellery</option>
                                <option value="Gold Jewellery">Gold Jewellery</option>
                                <option value="Silver Jewellery">Silver Jewellery</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select a category"}
                                options={[
                                    {
                                        value: "gold jewellery",
                                        label: "Gold Jewellery"
                                    },
                                    {
                                        value: "diamond jewellery",
                                        label: "Diamond Jewellery"
                                    },
                                    {
                                        value: "silver jewellery",
                                        label: "Silver Jewellery"
                                    }
                                ]}
                                name="category"
                            />
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Style</label>
                            {/* <select name="style" defaultValue="Open Setting 1">
                                <option value="Open Setting 1">Open Setting 1</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select a style"}
                                options={[
                                    {
                                        value: "style1",
                                        label: "Style1"
                                    },
                                    {
                                        value: "style2",
                                        label: "Style2"
                                    },
                                    {
                                        value: "style3",
                                        label: "Style3"
                                    }
                                ]}
                                name="style"
                            />
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Product</label>
                            {/* <select name="product" defaultValue="Necklace">
                                <option value="Necklace">Necklace</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select a product"}
                                options={[
                                    {
                                        value: "product1",
                                        label: "Product1"
                                    },
                                    {
                                        value: "product2",
                                        label: "Product2"
                                    },
                                    {
                                        value: "product3",
                                        label: "Product3"
                                    }
                                ]}
                                name="product"
                            />
                        </div>
                        <div className={classes.group}>
                            <label>Model</label>
                            {/* <select name="model" defaultValue="Fancy">
                                <option value="Fancy">Fancy</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select model"}
                                options={[
                                    {
                                        value: "model1",
                                        label: "Model1"
                                    },
                                    {
                                        value: "model2",
                                        label: "Model2"
                                    },
                                    {
                                        value: "model3",
                                        label: "Model3"
                                    }
                                ]}
                                name="model"
                            />
                        </div>
                        <div className={classes.group}>
                            <label>Size</label>
                            {/* <select name="size" defaultValue="N/A">
                                <option value="N/A">N/A</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select size"}
                                options={[
                                    {
                                        value: "size1",
                                        label: "Size1"
                                    },
                                    {
                                        value: "size2",
                                        label: "Size2"
                                    },
                                    {
                                        value: "size3",
                                        label: "Size3"
                                    }
                                ]}
                                name="size"
                            />
                        </div>
                        <div className={classes.group}>
                            <label>Worker</label>
                            {/* <select name="worker" defaultValue="Worker-1">
                                <option value="Worker-1">Worker-1</option>
                            </select> */}
                            <SelectComponent
                                placeholder={"Select worker"}
                                options={[
                                    {
                                        value: "worker1",
                                        label: "Worker1"
                                    },
                                    {
                                        value: "worker2",
                                        label: "Worker2"
                                    },
                                    {
                                        value: "worker3",
                                        label: "Worker3"
                                    }
                                ]}
                                name="worker"
                            />
                        </div>
                        <div className={classes["num-group"]}  style={{maxWidth:"10%"}}>
                            <label>Pcs</label>
                            {/* <input name="pcs" type="number" defaultValue={1}/> */}
                            <InputComponent name="pcs1" placeholder="Enter Pcs" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Gross Wt</label>
                            <InputComponent name="gross-wt" placeholder="Enter Gross Wt" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>stone Wt</label>
                            <InputComponent name="stone-wt" placeholder="Enter stone Wt" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Net Wt</label>
                            <InputComponent name="net-wt" placeholder="Enter Net Wt" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Com- Wt</label>
                            <InputComponent name="com-wt" placeholder="Enter Com- Wt" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Ghat Wt</label>
                            <InputComponent name="ghat-wt" placeholder="Enter Ghat Wt" width="100%" height="2rem"/>
                        </div>
                        <div className={classes.remarks}>
                            <label>Remarks</label>
                            <input type="text" placeholder="Description" name="remarks"/>
                        </div>
                        <div className={classes.group}  style={{minWidth:"20%"}}>
                            <label>Type</label>
                            <select name="type" defaultValue="Type 1">
                                <option value="Type 1">Type 1</option>
                                <option value="Type 2">Type 2</option>
                            </select>
                            {/* <SelectComponent
                                placeholder={"Select a type"}
                                options={[
                                    {
                                        value: "type1",
                                        label: "Type1"
                                    },
                                    {
                                        value: "type2",
                                        label: "Type2"
                                    },
                                    {
                                        value: "type3",
                                        label: "Type3"
                                    }
                                ]}
                                name="type"
                            /> */}
                        </div>
                        <div className={classes.group}  style={{minWidth:"20%"}}>
                            <label>Stone Group</label>
                            <select name="stoneGroup" defaultValue="Stone Group 2">
                                <option value="Stone Grp 1">Stone Group 1</option>
                                <option value="Stone Grp 2">Stone Group 2</option>
                            </select>
                            {/* <SelectComponent
                                placeholder={"Select stone group"}
                                options={[
                                    {
                                        value: "stone group 1",
                                        label: "Stone Group 1"
                                    },
                                    {
                                        value: "stone group 2",
                                        label: "Stone Group 2"
                                    },
                                    {
                                        value: "stone group 3",
                                        label: "Stone Group 3"
                                    }
                                ]}
                                name="stone-group"
                            /> */}
                        </div>
                        <div className={classes["num-group"]}  style={{maxWidth:"10%"}}>
                            <label>Pcs</label>
                            <InputComponent name="pcs" placeholder="Enter Pcs" width="100%" height="2rem"/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Weight</label>
                            <InputComponent name="stoneWt" placeholder="Enter Gross Wt" width="100%" height="2rem"/>
                        </div>
                        <button>ADD</button>
                    </section>
                </form>
                <CreationTable rowDataArr={data} />
                <div className={classes.actions}>
                    <button style={{marginRight:"3rem"}}>Add Image</button>
                    <button>Save</button>
                    <button>Clear</button>
                    <button>Exit</button>
                </div>
            </fieldset>
            <div className={classes.image}>
                <img src="https://picsum.photos/536/361" alt="Design Image"/>
            </div>
        </div>
    </Below>
}