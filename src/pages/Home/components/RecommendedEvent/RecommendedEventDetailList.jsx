import { RecommendedEventDetailItem } from "./RecommendedEventDetailItem"

export const RecommendedEventDetailList = ({ recommendedEvents }) => {

  return (
    <>
      {recommendedEvents.map(recommend => (
        <RecommendedEventDetailItem 
          key={recommend._id}
          recommend={recommend}
        />
      ))}
    </>
  )
}
