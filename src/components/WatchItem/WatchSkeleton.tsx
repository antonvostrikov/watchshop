import React from "react"
import ContentLoader from "react-content-loader"

const WatchSkeleton:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={600}
    height={700}
    viewBox="0 0 600 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="124" y="92" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="0" rx="0" ry="0" width="300" height="450" /> 
    <rect x="0" y="490" rx="0" ry="0" width="298" height="24" /> 
    <rect x="0" y="534" rx="0" ry="0" width="298" height="24" />
  </ContentLoader>
)

export default WatchSkeleton