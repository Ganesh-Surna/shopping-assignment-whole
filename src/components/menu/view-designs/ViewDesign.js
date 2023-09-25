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

const DUMMY_LIST = [
  {
    id: "d1",
    title: "Design 1",
    description: "This is the first Design.",
    price: 300,
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 1",
    oldPrice: 350,
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
    brand: "Brand 2",
    mainGrp: "Gold",
    category: "Gold Jewelery",
    oldPrice: 400,
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
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 3",
    oldPrice: 450,
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
    mainGrp: "Gold",
    category: "Gold Jewelery",
    brand: "Brand 4",
    oldPrice: 480,
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
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 5",
    oldPrice: 500,
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
    mainGrp: "Gold",
    category: "Gold Jewelery",
    brand: "Brand 6",
    oldPrice: 550,
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
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 7",
    oldPrice: 600,
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
    mainGrp: "Gold",
    category: "Gold Jewelery",
    brand: "Brand 8",
    oldPrice: 650,
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
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 9",
    oldPrice: 700,
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
    mainGrp: "Gold",
    category: "Gold Jewelery",
    brand: "Brand 10",
    oldPrice: 750,
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
    mainGrp: "Diamond",
    category: "Diamond Jewelery",
    brand: "Brand 11",
    oldPrice: 800,
    image: "https://picsum.photos/536/361",
    image1: "https://picsum.photos/536/331",
    image2: "https://picsum.photos/536/332",
    image3: "https://picsum.photos/536/333",
  },
  //   {
  //     id: "d",
  //     title: "Design ",
  //     description: "This is the  Design.",
  //     price: 300,
  //     brand: "Brand ",
  //     oldPrice: 350,
  //     image: "https://picsum.photos/536/362",
  //   },
];

export default function ViewDesign() {
  const token = useRouteLoaderData("root");
  const [isShow, setIsShow] = useState(false);
  const [cardItem, setCardItem] = useState(null);

  const [priceFilters, setPriceFilters] = useState({
    below350: false,
    between350and500: false,
    between500and1000: false,
  });

  const [mainGrpFilters, setMainGrpFilters] = useState({
    gold: false,
    diamond: false,
  });

  function handleShowDetails(item) {
    setCardItem(item);
    setIsShow(true);
  }
  function handleGoBack() {
    setIsShow(false);
  }

  const {
    isExpanded: isPriceFilterExpanded,
    handleToggle: handleExpandPriceFilter,
  } = useFilter();

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

  function handlePriceChange(event) {
    const { name, checked } = event.target;

    setPriceFilters((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  }

  function handleMainGrpChange(event) {
    const { name, checked } = event.target;

    setMainGrpFilters((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  }

  let filteredList = DUMMY_LIST.filter((item) => {
    if (mainGrpFilters.diamond && item.mainGrp === "Diamond") {
      return true;
    }
    if (mainGrpFilters.gold && item.mainGrp === "Gold") {
      return true;
    }

    if (item.price < 350 && priceFilters.below350) {
      return true;
    }
    if (
      priceFilters.between350and500 &&
      item.price >= 350 &&
      item.price <= 500
    ) {
      return true;
    }
    if (
      priceFilters.between500and1000 &&
      item.price > 500 &&
      item.price <= 1000
    ) {
      return true;
    }

    return false;
  });

  if (filteredList.length === 0) {
    filteredList = DUMMY_LIST;
  }

  let content = (
    <div key="whole-designs" className={classes["whole-designs-page"]}>
      <div className={classes["whole-filter"]}>
        <h2>Shop By</h2>
        <div className={classes.filter}>
          <div
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
                  onChange={handlePriceChange}
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
          )}

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
                  onChange={handleMainGrpChange}
                />
                <label htmlFor="diamond">Diamond</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input
                  type="checkbox"
                  id="gold"
                  name="gold"
                  checked={mainGrpFilters.gold}
                  onChange={handleMainGrpChange}
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
                <input type="checkbox" id="Diamond Jewelery" />
                <label htmlFor="Diamond Jewelery">Diamond Jewelery</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="GOLD Jewelery" />
                <label htmlFor="GOLD Jewelery">GOLD Jewelery</label>
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
                <input type="checkbox" id="1" />
                <label htmlFor="1">1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="2" />
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
                <input type="checkbox" id="Style 1" />
                <label htmlFor="Style 1">Style 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="Style 2" />
                <label htmlFor="Style 2">Style 2</label>
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
                <input type="checkbox" id="Product 1" />
                <label htmlFor="Product 1">Product 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="Product 2" />
                <label htmlFor="Product 2">Product 2</label>
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
                <input type="checkbox" id="Model 1" />
                <label htmlFor="Model 1">Model 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="Model 2" />
                <label htmlFor="Model 2">Model 2</label>
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
                <input type="checkbox" id="Size 1" />
                <label htmlFor="Size 1">Size 1</label>
              </p>
              <p className={classes["checkbox-grp"]}>
                <input type="checkbox" id="Size 2" />
                <label htmlFor="Size 2">Size 2</label>
              </p>
            </div>
          )}
        </div>
      </div>

      <motion.div className={classes.designs}>
        <h1>View All Designs</h1>
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
      </motion.div>
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
            <p className={classes.brand}>{cardItem.brand}</p>
            <p>{cardItem.description}</p>
            <p className={classes.price}>
              <span>₹{cardItem.price} </span>
              <del>₹{cardItem.oldPrice}</del>
            </p>
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
