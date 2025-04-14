import { NextPage } from "next";
import { LotteryResult } from "./lottery.ts";
import useSWR from "swr";
import React from "react";

const fetcher = (url: string): Promise<LotteryResult> =>
  fetch(url).then((response) => response.json());

const Lottery: NextPage = () => {
  const { data: lottery } = useSWR("/api/lottery", fetcher);
  return (
    <>
      <p>おみくじ結果: {lottery?.result}</p>
    </>
  );
};
export default Lottery;
