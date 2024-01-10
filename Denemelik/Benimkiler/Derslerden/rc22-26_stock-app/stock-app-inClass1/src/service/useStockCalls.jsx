import {
  fetchStart,
  fetchFail,
  getStocksSuccess,
  // getFirmsSuccess,
  // getSalesSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/firms/");
  //     dispatch(getFirmsSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Firm bilgileri çekilemedi.");
  //   }
  // };

  // const getSales = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken("/sales/");
  //     dispatch(getSalesSuccess(data.data));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Satış bilgileri çekilemedi.");
  //   }
  // };

  // return { getFirms, getSales };

  const getStocks = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStocksSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgileri çekilemedi.`);
    }
  };

  return { getStocks };
};

export default useStockCalls;
