import { useState } from "react";
import classes from "./ViewDesign.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { Carousel } from "antd";
import LikeIcon from "../../../icons/like-icon";
import CarouselComponent from "./CarouselComponent";
import Magnify from "./magnify";
import ReactImageMagnify from "react-image-magnify";
import MinusIcon from "../../../icons/minus-icon";
import PlusIcon from "../../../icons/plus-icon";
import useFilter from "../../../hooks/use-filter";
import { motion, AnimatePresence } from "framer-motion";
import useCheck from "../../../hooks/use-check";
import useInput from "../../../hooks/use-input";

const today = new Date().toISOString().slice(0, 10);

const DUMMY_LIST = [
  {
    id: "d1",
    title: "Design 1",
    description: "This is the first Design.",
    price: 300,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 120,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/354",
    image1: "https://picsum.photos/536/301",
    image2: "https://picsum.photos/536/302",
    image3: "https://picsum.photos/536/303",
  },
  {
    id: "d2",
    title: "Design 2",
    description: "This is the second Design.",
    price: 350,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 3",
    product: "Product 3",
    model: "Model 3",
    size: "Size 3",
    worker: "Worker 3",
    pieces: 1,
    gross_weight: 130,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/355",
    image1: "https://picsum.photos/536/304",
    image2: "https://picsum.photos/536/305",
    image3: "https://picsum.photos/536/306",
  },
  {
    id: "d3",
    title: "Design 3",
    description: "This is the third Design.",
    price: 390,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 140,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/353",
    image1: "https://picsum.photos/536/307",
    image2: "https://picsum.photos/536/308",
    image3: "https://picsum.photos/536/309",
  },
  {
    id: "d4",
    title: "Design 4",
    description: "This is the fourth Design.",
    price: 400,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 1",
    product: "Product 1",
    model: "Model 1",
    size: "Size 1",
    worker: "Worker 1",
    pieces: 1,
    gross_weight: 120,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/352",
    image1: "https://picsum.photos/536/310",
    image2: "https://picsum.photos/536/311",
    image3: "https://picsum.photos/536/312",
  },
  {
    id: "d5",
    title: "Design 5",
    description: "This is the fifth Design.",
    price: 450,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 130,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/351",
    image1: "https://picsum.photos/536/313",
    image2: "https://picsum.photos/536/314",
    image3: "https://picsum.photos/536/315",
  },
  {
    id: "d6",
    title: "Design 6",
    description: "This is the sixth Design.",
    price: 500,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 3",
    product: "Product 3",
    model: "Model 3",
    size: "Size 3",
    worker: "Worker 3",
    pieces: 1,
    gross_weight: 140,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/356",
    image1: "https://picsum.photos/536/316",
    image2: "https://picsum.photos/536/317",
    image3: "https://picsum.photos/536/318",
  },
  {
    id: "d7",
    title: "Design 7",
    description: "This is the seventh Design.",
    price: 550,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 120,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/357",
    image1: "https://picsum.photos/536/319",
    image2: "https://picsum.photos/536/320",
    image3: "https://picsum.photos/536/321",
  },
  {
    id: "d8",
    title: "Design 8",
    description: "This is the eighth Design.",
    price: 600,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 3",
    product: "Product 3",
    model: "Model 3",
    size: "Size 3",
    worker: "Worker 3",
    pieces: 1,
    gross_weight: 130,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/358",
    image1: "https://picsum.photos/536/322",
    image2: "https://picsum.photos/536/323",
    image3: "https://picsum.photos/536/324",
  },
  {
    id: "d9",
    title: "Design 9",
    description: "This is the ninth Design.",
    price: 650,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 1",
    product: "Product 1",
    model: "Model 1",
    size: "Size 1",
    worker: "Worker 1",
    pieces: 1,
    gross_weight: 140,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/359",
    image1: "https://picsum.photos/536/325",
    image2: "https://picsum.photos/536/326",
    image3: "https://picsum.photos/536/327",
  },
  {
    id: "d10",
    title: "Design 10",
    description: "This is the tenth Design.",
    price: 700,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 120,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/360",
    image1: "https://picsum.photos/536/328",
    image2: "https://picsum.photos/536/329",
    image3: "https://picsum.photos/536/330",
  },
  {
    id: "d11",
    title: "Design 11",
    description: "This is the 11th Design.",
    price: 750,
    main_group: "Diamond",
    category: "Diamond Jewelery",
    design_number: 2,
    created_date: today,
    style: "Style 1",
    product: "Product 1",
    model: "Model 1",
    size: "Size 1",
    worker: "Worker 1",
    pieces: 1,
    gross_weight: 130,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/361",
    image1: "https://picsum.photos/536/331",
    image2: "https://picsum.photos/536/332",
    image3: "https://picsum.photos/536/333",
  },
  {
    id: "d12",
    title: "Design 12",
    description: "This is the 12th Design.",
    price: 750,
    main_group: "Gold",
    category: "Gold Jewelery",
    design_number: 1,
    created_date: today,
    style: "Style 2",
    product: "Product 2",
    model: "Model 2",
    size: "Size 2",
    worker: "Worker 2",
    pieces: 1,
    gross_weight: 140,
    stone_weight: 130,
    net_weight: 140,
    component_weight: 150,
    ghat_weight: 160,
    remark: "Remarks description...",
    image: "https://picsum.photos/536/361",
    image1: "https://picsum.photos/536/331",
    image2: "https://picsum.photos/536/332",
    image3: "https://picsum.photos/536/333",
  },
];

export default function ViewDesign() {
  const token = useRouteLoaderData("root");
  const [isShow, setIsShow] = useState(false);
  const [cardItem, setCardItem] = useState(null);
  const [weightRange, setWeightRange]= useState();

  const {
    inputVal: fromWt,
    isValid: fromWtIsValid,
    hasErr: fromWtHasErr,
    touchFn: fromWtTouchFn,
    resetFn: fromWtResetFn,
    handleBlur: fromWtHandleBlur,
    handleChange: fromWtHandleChange,
  } = useInput((inputValue) => inputValue.trim().length !== 0);

  const {
    inputVal: toWt,
    isValid: toWtIsValid,
    hasErr: toWtHasErr,
    touchFn: toWtTouchFn,
    resetFn: toWtResetFn,
    handleBlur: toWtHandleBlur,
    handleChange: toWtHandleChange,
  } = useInput((inputValue) => inputValue.trim().length !== 0);

  // const [priceFilters, setPriceFilters] = useState({
  //   below350: false,
  //   between350and500: false,
  //   between500and1000: false,
  // });

  // const [mainGrpFilters, setMainGrpFilters] = useState({
  //   gold: false,
  //   diamond: false,
  // });

  const {
    field: mainGrpFilters,
    handleFieldCheckChange: handleMainGroupCheckChange,
  } = useCheck({
    gold: false,
    diamond: false,
  });

  const {
    field: categoryFilters,
    handleFieldCheckChange: handleCategoryCheckChange,
  } = useCheck({
    goldJewelery: false,
    diamondJewelery: false,
  });

  const {
    field: designNumFilters,
    handleFieldCheckChange: handleDesignNumCheckChange,
  } = useCheck({
    one: false,
    two: false,
  });

  const {
    field: styleFilters,
    handleFieldCheckChange: handleStyleCheckChange,
  } = useCheck({
    one: false,
    two: false,
    three: false,
  });

  const {
    field: productFilters,
    handleFieldCheckChange: handleProductCheckChange,
  } = useCheck({
    one: false,
    two: false,
    three: false,
  });

  const {
    field: modelFilters,
    handleFieldCheckChange: handleModelCheckChange,
  } = useCheck({
    one: false,
    two: false,
    three: false,
  });

  const { field: sizeFilters, handleFieldCheckChange: handleSizeCheckChange } =
    useCheck({
      one: false,
      two: false,
      three: false,
    });

  function handleShowDetails(item) {
    setCardItem(item);
    setIsShow(true);
  }
  function handleGoBack() {
    setIsShow(false);
  }

  // const {
  //   isExpanded: isPriceFilterExpanded,
  //   handleToggle: handleExpandPriceFilter,
  // } = useFilter();

  const {
    isExpanded: isCategoryFilterExpanded,
    handleToggle: handleExpandCategoryFilter,
  } = useFilter();

  const {
    isExpanded: isDesignFilterExpanded,
    handleToggle: handleExpandDesignFilter,
  } = useFilter();

  const {
    isExpanded: isMainGrpFilterExpanded,
    handleToggle: handleExpandMainGrpFilter,
  } = useFilter();

  const {
    isExpanded: isStyleFilterExpanded,
    handleToggle: handleExpandStyleFilter,
  } = useFilter();

  const {
    isExpanded: isProductFilterExpanded,
    handleToggle: handleExpandProductFilter,
  } = useFilter();

  const {
    isExpanded: isModelFilterExpanded,
    handleToggle: handleExpandModelFilter,
  } = useFilter();

  const {
    isExpanded: isSizeFilterExpanded,
    handleToggle: handleExpandSizeFilter,
  } = useFilter();

  // function handlePriceCheckChange(event) {
  //   const { name, checked } = event.target;

  //   setPriceFilters((prev) => {
  //     return {
  //       ...prev,
  //       [name]: checked,
  //     };
  //   });
  // }

  // function handleMainCheckGrpChange(event) {
  //   const { name, checked } = event.target;

  //   setMainGrpFilters((prev) => {
  //     return {
  //       ...prev,
  //       [name]: checked,
  //     };
  //   });
  // }

  let weightRangeIsValid=false;

  if(fromWtIsValid && toWtIsValid){
    weightRangeIsValid=true;
  }

  function handleSearchWeightRange(){
    fromWtTouchFn();
    toWtTouchFn();

    if(!weightRangeIsValid){
      return;
    }
    setWeightRange((prev)=>{
      return {...prev, fromWt, toWt}
    })
    fromWtResetFn();
    toWtResetFn();
  }

  let filteredList = DUMMY_LIST.filter((item) => {
    if (mainGrpFilters.diamond && item.main_group === "Diamond") {
      return true;
    }
    if (mainGrpFilters.gold && item.main_group === "Gold") {
      return true;
    }

    if (categoryFilters.goldJewelery && item.category === "Gold Jewelery") {
      return true;
    }
    if (
      categoryFilters.diamondJewelery &&
      item.category === "Diamond Jewelery"
    ) {
      return true;
    }

    if (designNumFilters.one && item.design_number === 1) {
      return true;
    }
    if (designNumFilters.two && item.design_number === 2) {
      return true;
    }

    if (styleFilters.one && item.style === "Style 1") {
      return true;
    }
    if (styleFilters.two && item.style === "Style 2") {
      return true;
    }
    if (styleFilters.three && item.style === "Style 3") {
      return true;
    }

    if (productFilters.one && item.product === "Product 1") {
      return true;
    }
    if (productFilters.two && item.product === "Product 2") {
      return true;
    }
    if (productFilters.three && item.product === "Product 3") {
      return true;
    }

    if (modelFilters.one && item.model === "Model 1") {
      return true;
    }
    if (modelFilters.two && item.model === "Model 2") {
      return true;
    }
    if (modelFilters.three && item.model === "Model 3") {
      return true;
    }

    if (sizeFilters.one && item.size === "Size 1") {
      return true;
    }
    if (sizeFilters.two && item.size === "Size 2") {
      return true;
    }
    if (sizeFilters.three && item.size === "Size 3") {
      return true;
    }

    if(weightRange?.fromWt <= item.gross_weight && weightRange?.toWt >= item.gross_weight){
      return true;
    }

    // if (item.price < 350 && priceFilters.below350) {
    //   return true;
    // }
    // if (
    //   priceFilters.between350and500 &&
    //   item.price >= 350 &&
    //   item.price <= 500
    // ) {
    //   return true;
    // }
    // if (
    //   priceFilters.between500and1000 &&
    //   item.price > 500 &&
    //   item.price <= 1000
    // ) {
    //   return true;
    // }

    return false;
  });

  if (filteredList.length === 0) {
    filteredList = DUMMY_LIST;
  }

  const fromWtClasses = `${classes["num-group"]} ${
    fromWtHasErr ? classes["invalid"] : ""
  }`;
  const toWtClasses = `${classes["num-group"]} ${
    toWtHasErr ? classes["invalid"] : ""
  }`;

  let content = (
    <div key="whole-designs" className={classes["whole-designs-page"]}>
      <div className={classes["whole-filter"]}>
        <h2>Shop By</h2>
        <div className={classes.filter}>
          {/* <div
            className={classes["filter-field"]}
            onClick={handleExpandPriceFilter}
          >
            <span className={classes.title}>PRICE</span>
            <span className={classes.symbol}>
              {isPriceFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isPriceFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="below350"
                  name="below350"
                  checked={priceFilters.below350}
                  onChange={handlePriceChange}
                />
                <label htmlFor="below350">Below ₹350</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="between350and500"
                  name="between350and500"
                  checked={priceFilters.between350and500}
                  onChange={handlePriceCheckChange}
                />
                <label htmlFor="between350and500">₹350 - ₹500</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="between500and1000"
                  name="between500and1000"
                  checked={priceFilters.between500and1000}
                  onChange={handlePriceChange}
                />
                <label htmlFor="between500and1000">₹500 - ₹1000</label>
              </p>
            </div>
          )} */}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandMainGrpFilter}
          >
            <span className={classes.title}>Main Group</span>
            <span className={classes.symbol}>
              {isMainGrpFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isMainGrpFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="diamond"
                  name="diamond"
                  checked={mainGrpFilters.diamond}
                  onChange={handleMainGroupCheckChange}
                />
                <label htmlFor="diamond">Diamond</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="gold"
                  name="gold"
                  checked={mainGrpFilters.gold}
                  onChange={handleMainGroupCheckChange}
                />
                <label htmlFor="gold">Gold</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandCategoryFilter}
          >
            <span className={classes.title}>CATEGORY</span>
            <span className={classes.symbol}>
              {isCategoryFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isCategoryFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Diamond Jewelery"
                  name="diamondJewelery"
                  checked={categoryFilters.diamondJewelery}
                  onChange={handleCategoryCheckChange}
                />
                <label htmlFor="Diamond Jewelery">Diamond Jewelery</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Gold Jewelery"
                  name="goldJewelery"
                  checked={categoryFilters.goldJewelery}
                  onChange={handleCategoryCheckChange}
                />
                <label htmlFor="Gold Jewelery">GOLD Jewelery</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandDesignFilter}
          >
            <span className={classes.title}>DESIGN NO.</span>
            <span className={classes.symbol}>
              {isDesignFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isDesignFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="1"
                  name="one"
                  checked={designNumFilters.one}
                  onChange={handleDesignNumCheckChange}
                />
                <label htmlFor="1">1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="2"
                  name="two"
                  checked={designNumFilters.two}
                  onChange={handleDesignNumCheckChange}
                />
                <label htmlFor="2">2</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandStyleFilter}
          >
            <span className={classes.title}>STYLE</span>
            <span className={classes.symbol}>
              {isStyleFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isStyleFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Style 1"
                  name="one"
                  checked={styleFilters.one}
                  onChange={handleStyleCheckChange}
                />
                <label htmlFor="Style 1">Style 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Style 2"
                  name="two"
                  checked={styleFilters.two}
                  onChange={handleStyleCheckChange}
                />
                <label htmlFor="Style 2">Style 2</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Style 3"
                  name="three"
                  checked={styleFilters.three}
                  onChange={handleStyleCheckChange}
                />
                <label htmlFor="Style 3">Style 3</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandProductFilter}
          >
            <span className={classes.title}>PRODUCT</span>
            <span className={classes.symbol}>
              {isProductFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isProductFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Product 1"
                  name="one"
                  checked={productFilters.one}
                  onChange={handleProductCheckChange}
                />
                <label htmlFor="Product 1">Product 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Product 2"
                  name="two"
                  checked={productFilters.two}
                  onChange={handleProductCheckChange}
                />
                <label htmlFor="Product 2">Product 2</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Product 3"
                  name="three"
                  checked={productFilters.three}
                  onChange={handleProductCheckChange}
                />
                <label htmlFor="Product 3">Product 3</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandModelFilter}
          >
            <span className={classes.title}>MODEL</span>
            <span className={classes.symbol}>
              {isModelFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isModelFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Model 1"
                  name="one"
                  checked={modelFilters.one}
                  onChange={handleModelCheckChange}
                />
                <label htmlFor="Model 1">Model 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Model 2"
                  name="two"
                  checked={modelFilters.two}
                  onChange={handleModelCheckChange}
                />
                <label htmlFor="Model 2">Model 2</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Model 3"
                  name="three"
                  checked={modelFilters.three}
                  onChange={handleModelCheckChange}
                />
                <label htmlFor="Model 3">Model 3</label>
              </p>
            </div>
          )}

          <div
            className={classes["filter-field"]}
            onClick={handleExpandSizeFilter}
          >
            <span className={classes.title}>SIZE</span>
            <span className={classes.symbol}>
              {isSizeFilterExpanded ? <MinusIcon /> : <PlusIcon />}
            </span>
          </div>
          {isSizeFilterExpanded && (
            <div>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Size 1"
                  name="one"
                  checked={sizeFilters.one}
                  onChange={handleSizeCheckChange}
                />
                <label htmlFor="Size 1">Size 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Size 2"
                  name="two"
                  checked={sizeFilters.two}
                  onChange={handleSizeCheckChange}
                />
                <label htmlFor="Size 2">Size 2</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="Size 3"
                  name="three"
                  checked={sizeFilters.three}
                  onChange={handleSizeCheckChange}
                />
                <label htmlFor="Size 3">Size 3</label>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={classes.designs}>
        <h1>View All Designs</h1>
        <hr />
        <section className={classes["weight-range"]}>
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>Weight Range</legend>
            <div className={fromWtClasses} style={{ maxWidth: "10%" }}>
              <label htmlFor="fromWt">From Wt</label>
              <input
                value={fromWt}
                onBlur={fromWtHandleBlur}
                onChange={fromWtHandleChange}
                id="fromWt"
                name="fromWt"
                placeholder="Enter from wt"
                width="100%"
                height="2rem"
              />
              {/* <AnimatePresence> */}
              {fromWtHasErr && (
                  <motion.p
                  initial={{ height: 0}}
                    animate={{ y: [-30,0], height:"auto", opacity:[0,1] }}
                    // exit={{y:-10, opacity:0}}
                    className={classes.err}
                  >
                    Enter valid number!
                  </motion.p>
                )}
              {/* </AnimatePresence> */}
                
            </div>
            <motion.div className={toWtClasses} style={{ maxWidth: "10%" }}>
              <label htmlFor="toWt">To Wt</label>
              <input
                value={toWt}
                onBlur={toWtHandleBlur}
                onChange={toWtHandleChange}
                id="toWt"
                name="toWt"
                placeholder="Enter to wt"
                width="100%"
                height="2rem"
              />
              {/* <AnimatePresence> */}
              {toWtHasErr && (
                  <motion.p
                    initial={{ height: 0}}
                    animate={{ y: [-30,0], height:"auto", opacity:[0,1] }}
                    // exit={{y:-10, opacity:0}}
                    className={classes.err}
                  >
                    Enter valid number!
                  </motion.p>
                )}
              {/* </AnimatePresence> */}
                
            </motion.div>
          </fieldset>
          <div className={classes.search}>
            <motion.button
              whileHover={{ scale: 1.05, stiffness: 400, mass: 1 }}
              onClick={handleSearchWeightRange}
            >
              Search
            </motion.button>
          </div>
        </section>
        <hr />
        <motion.ul
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: {
              transition: { staggerChildren: 0.05 },
              y: 0,
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          className={classes["cards-container"]}
        >
          <AnimatePresence>
            {filteredList.map((item) => {
              return (
                <motion.li
                  layout
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  // initial="hidden"
                  // animate="visible"
                  exit={{ opacity: 1, scale: 1 }}
                  onClick={() => handleShowDetails(item)}
                  key={item.id}
                  className={classes.card}
                >
                  <img src={item.image} alt={item.title} />
                  <p className={classes.title}>{item.title}</p>
                  <p>{item.description}</p>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  );

  if (isShow) {
    content = (
      <motion.div
        key="details"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className={classes["details-container"]}
      >
        <h1>{cardItem.title} Details</h1>
        <div className={classes["card-details"]}>
          <div className={classes.carousel}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: cardItem.image,
                  width: 500,
                  height: 500,
                },
                largeImage: {
                  src: cardItem.image,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
              }}
            />
          </div>
          {/* <div className={classes.carousel}> */}

          {/* <Carousel autoplay>
                        <img className={classes["carousel-img"]} src={cardItem.image}/>
                        <img className={classes["carousel-img"]} src={cardItem.image1}/>
                        <img className={classes["carousel-img"]} src={cardItem.image2}/>
                        <img className={classes["carousel-img"]} src={cardItem.image3}/>
                      </Carousel> */}
          {/* <Carousel autoplay> */}
          {/* <div className={classes['carousel-img']}><Magnify src={cardItem.image}/></div> */}
          {/* <div className={classes['carousel-img']}><Magnify src={cardItem.image1}/></div>
                      <div className={classes['carousel-img']}><Magnify src={cardItem.image2}/></div>
                      <div className={classes['carousel-img']}><Magnify src={cardItem.image3}/></div>
                      </Carousel> */}
          {/* </div> */}
          <section className={classes.content}>
            <h2 className={classes.title}>{cardItem.title}</h2>
            <p>{cardItem.description}</p>
            <div className={classes["cardItem-details"]}>
              <div>
                <span>Design No.: </span>
                <p>{cardItem.design_number}</p>
              </div>
              <div>
                <span>Mian Group: </span>
                <p>{cardItem.main_group}</p>
              </div>
              <div>
                <span>Category: </span>
                <p>{cardItem.category}</p>
              </div>
              <div>
                <span>Created Date: </span>
                <p>{cardItem.created_date}</p>
              </div>
              <div>
                <span>Style: </span>
                <p>{cardItem.style}</p>
              </div>
              <div>
                <span>Product: </span>
                <p>{cardItem.product}</p>
              </div>
              <div>
                <span>Model: </span>
                <p>{cardItem.model}</p>
              </div>
              <div>
                <span>Size: </span>
                <p>{cardItem.size}</p>
              </div>
              <div>
                <span>Worker: </span>
                <p>{cardItem.worker}</p>
              </div>
              <div>
                <span>Pieces: </span>
                <p>{cardItem.pieces}</p>
              </div>
              <div>
                <span>Gross Weight: </span>
                <p>{cardItem.gross_weight}</p>
              </div>
              <div>
                <span>Stone Weight: </span>
                <p>{cardItem.stone_weight}</p>
              </div>
              <div>
                <span>Net Weight: </span>
                <p>{cardItem.net_weight}</p>
              </div>
              <div>
                <span>Component Weight: </span>
                <p>{cardItem.component_weight}</p>
              </div>
              <div>
                <span>Ghat Weight: </span>
                <p>{cardItem.ghat_weight}</p>
              </div>

              {/* <p className={classes.price}>
                <span>₹{cardItem.price} </span>
              </p> */}
            </div>
            <div className={classes.actions}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, mass: 1 }}
              >
                ADD TO CART
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 500, mass: 1 }}
              >
                BUY
              </motion.button>
            </div>
          </section>
        </div>
        {/* <CarouselComponent /> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, mass: 1 }}
          className={classes.back}
          onClick={handleGoBack}
        >
          Back
        </motion.button>
      </motion.div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </>
  );
}
