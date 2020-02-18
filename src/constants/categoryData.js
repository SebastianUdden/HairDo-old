import hairLong from "../images/hair-long.png"
import hairMedium from "../images/hair-medium.png"
import hairShort from "../images/hair-short.png"
import hairPonyTail from "../images/hair-ponytail.png"
import hairUpdo from "../images/hair-updo.png"
import { PONYTAIL_ARTICLE_FIELDS } from "./articleData"

export const CATEGORY_DATA = [
  {
    title: "Him",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/-CTC7sxRfRYX09IBjCm1AQT_Hf_Poc4FUIZdf0SAlsSMWRofoookKoblUeAyKmt6342MxXDH6YxmhEb1N2Zc9SDgyiWZjs7WSgH4aPhrrjSWumN9wbaxPoCBlwHdSJXJ3D0",
    articles: [],
  },
  {
    title: "Her",
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
    articles: [],
  },
  {
    title: "Short",
    imageUrl: hairShort,
    articles: [],
  },
  {
    title: "Medium",
    imageUrl: hairMedium,
    articles: [],
  },
  {
    title: "Long",
    imageUrl: hairLong,
    articles: [],
  },
  {
    title: "Ponytail",
    imageUrl: hairPonyTail,
    articles: PONYTAIL_ARTICLE_FIELDS,
  },
  {
    title: "Updo",
    imageUrl: hairUpdo,
    articles: [],
  },
]
