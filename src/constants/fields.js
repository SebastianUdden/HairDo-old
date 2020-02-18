import hairLong from "../images/hair-long.png"
import hairMedium from "../images/hair-medium.png"
import hairShort from "../images/hair-short.png"
import hairPonyTail from "../images/hair-ponytail.png"
import hairUpdo from "../images/hair-updo.png"

/* eslint no-useless-escape: 0 */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#:;_\-\$%\^&\*])(?=.{8,})/

export const CATEGORY_PAGES = [
  {
    title: "Him",
    imageUrl:
      "https://lh3.googleusercontent.com/proxy/-CTC7sxRfRYX09IBjCm1AQT_Hf_Poc4FUIZdf0SAlsSMWRofoookKoblUeAyKmt6342MxXDH6YxmhEb1N2Zc9SDgyiWZjs7WSgH4aPhrrjSWumN9wbaxPoCBlwHdSJXJ3D0",
  },
  {
    title: "Her",
    imageUrl:
      "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
  },
  {
    title: "Short",
    imageUrl: hairShort,
  },
  {
    title: "Medium",
    imageUrl: hairMedium,
  },
  {
    title: "Long",
    imageUrl: hairLong,
  },
  {
    title: "Ponytail",
    imageUrl: hairPonyTail,
  },
  {
    title: "Updo",
    imageUrl: hairUpdo,
  },
]

export const SIGNUP_FIELDS = [
  {
    fieldName: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter optional username...",
    required: false,
  },
  {
    fieldName: "email",
    type: "email",
    label: "E-mail",
    placeholder: "Enter valid e-mail...",
    required: true,
    validationErrorMessage: "Wrong format, should be johndoe@email.com",
    validationRegex: EMAIL_REGEX,
  },
  {
    fieldName: "password",
    type: ["password", "text"],
    label: "Password",
    placeholder: "Enter strong password...",
    required: true,
    validationErrorMessage:
      "Weak password, strong passwords must be at least 8 letters and consist of alphabetical, numeric and special characters (!@#:_-%^&).",
    validationRegex: PASSWORD_REGEX,
    fieldHelperText:
      "Strong passwords should be at least 8 letters and consist of alphabetical, numeric and special characters (!@#:;_-%^&).",
  },
  {
    fieldName: "repeatPassword",
    type: ["password", "text"],
    placeholder: "Repeat strong password...",
    required: true,
    validationErrorMessage: "",
    validationRegex: PASSWORD_REGEX,
  },
]

export const LOGIN_FIELDS = [
  {
    fieldName: "email",
    type: "email",
    label: "E-mail",
    placeholder: "Enter your e-mail...",
    required: true,
    validationRegex: EMAIL_REGEX,
  },
  {
    fieldName: "password",
    type: ["password", "text"],
    label: "Password",
    placeholder: "Enter your password...",
    required: true,
    validationRegex: PASSWORD_REGEX,
  },
]

export const SETTINGS_FIELDS = [
  {
    fieldName: "username",
    type: "text",
    label: "Username",
    placeholder: "Enter optional username...",
    required: false,
  },
  {
    fieldName: "password",
    type: ["password", "text"],
    label: "Password",
    placeholder: "Enter strong password...",
    required: false,
    validationErrorMessage:
      "Weak password, should be at least 8 letters and consist of alphabetical, numeric and special characters",
    validationRegex: PASSWORD_REGEX,
  },
]
