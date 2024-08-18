
import { Helmet } from "react-helmet";

const HelmetWrapper = ({ title, description, keywords }:any) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

export default HelmetWrapper;
