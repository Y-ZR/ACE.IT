import React from "react";
import BellCurve from "./bell-curve";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GMATResults = ({ score }) => {
  const calculatePercentile = (score) => {
    return Math.min(
      Math.max(((score - 200) / (800 - 200)) * 100, 0),
      100
    ).toFixed(1);
  };

  // Calculate M7 chances (this is a hypothetical calculation)
  const calculateM7Chances = (score) => {
    if (score >= 750) return 95;
    if (score >= 720) return 80;
    if (score >= 700) return 60;
    if (score >= 680) return 40;
    if (score >= 650) return 20;
    return 5;
  };

  const percentile = calculatePercentile(score);
  const m7Chances = calculateM7Chances(score);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex items-center">
        <CardTitle>Your GMAT Practice Paper Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Your Score: {score}</h2>
            <p className="text-xl">Percentile: {percentile}%</p>
          </div>
          <BellCurve score={score} />
          <div className="text-center">
            <p className="text-xl italic">
              Estimated chance of entering an M7 business school: {m7Chances}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GMATResults;
