import { RecommendedEventItem } from "./RecommendedEventItem"

export const RecommendedEventList = ({ recommendedEvents }) => {

  return (
    <>
      {recommendedEvents.map(recommend => (
        <RecommendedEventItem
          key={recommend._id}
          recommend={recommend}
        />
      ))}
    </>
  )
}
