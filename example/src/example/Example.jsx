import React, { useState, useEffect } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import GetCatButton from "./components/GetCatButton/GetCatButton";
import { fetchCatImage as fetchCatImageFromApi } from "./services/Api";
import styles from "./App.module.scss";

function Main() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [catImageUrl, setCatImageUrl] = useState(null);
  const [refreshIntervalId, setRefreshIntervalId] = useState(null);

  const fetchCatImage = async () => {
    const url = await fetchCatImageFromApi();
    if (url) {
      setCatImageUrl(url);
    }
  };

  const startAutoRefresh = () => {
    if (isAutoRefresh && isEnabled) {
      const intervalId = setInterval(() => {
        fetchCatImage();
      }, 5000);
      setRefreshIntervalId(intervalId);
    } else {
      clearInterval(refreshIntervalId);
    }
  };


  useEffect(() => {
    startAutoRefresh();
    return () => clearInterval(refreshIntervalId);
  }, [isAutoRefresh, isEnabled]);


  useEffect(() => {
    if (isEnabled) {
      fetchCatImage();
    }
  }, [isEnabled]);

  return (
    <div className={styles.app}>
      <Checkbox
        label="Enabled"
        checked={isEnabled}
        onChange={(e) => setIsEnabled(e.target.checked)}
      />

      <Checkbox
        label="Auto-refresh every 5 seconds"
        checked={isAutoRefresh}
        onChange={(e) => setIsAutoRefresh(e.target.checked)}
        disabled={!isEnabled}
      />

      <GetCatButton onClick={fetchCatImage} disabled={!isEnabled} />

      {catImageUrl ? (
        <img src={catImageUrl} alt="Random Cat" className={styles.catImage} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default Main;
