import { useTranslation } from "react-i18next";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import React, { useEffect } from "react";
import SEO from "../../src/components/seo";
import { getServerSideProps } from "../index";
import { getImageUrl } from "utils/CustomFunctions";

const Index = ({ configData, landingPageData }) => {
  const { t } = useTranslation();
  const { data, refetch, isFetching } = useGetPolicyPage(
    "/api/v1/shipping-policy"
  );
  useEffect(() => {
    refetch();
  }, []);
  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Shipping policy` : "Loading..."}
        image={`${getImageUrl(
          { value: configData?.logo_storage },
          "business_logo_url",
          configData
        )}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <PolicyPage
          data={data}
          title={t("Shipping policy")}
          isFetching={isFetching}
        />
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };
