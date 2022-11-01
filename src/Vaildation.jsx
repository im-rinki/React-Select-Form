import * as Yup from "yup";
export const Vaildation =Yup.object({
    date:Yup.string().required("This Field Is Require"),
    state:Yup.string().required("This Field Is Require"),
    sitename:Yup.string("only number").required("This Field Is Require"),
     dms:Yup.number()
     .typeError('Amount must be a number')
     .required("This Field Is Require"),
     dmsloss:Yup.number().typeError('Amount must be a number').required("This Field Is Require"),
     revenue:Yup.number().typeError('Amount must be a number').required("This Field Is Require"),
});