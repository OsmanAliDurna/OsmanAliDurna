import { fetchStart, fetchFail, getStocksSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStocks = async (url = "firms") => {
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

  const deleteStock = async (url = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccessNotify(`${url} bilgisi silinmiştir.`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} silinemedi`);
    }
  };

  // const editStock = async (url = "firms", id) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken(`/${url}/`);
  //   const apiData = data.data;
  //   dispatch(getStockSuccess({ apiData, url }));
  //     await axiosWithToken.put(`/${url}/${id}/`, );
  //     toastSuccessNotify(`${url} bilgisi silinmiştir.`);
  //     getStocks(url);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} silinemedi`);
  //   }
  // };

  return { getStocks, deleteStock };
};

export default useStockCalls;
