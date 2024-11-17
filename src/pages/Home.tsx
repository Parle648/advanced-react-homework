import InteractiveGesture from "../shared/UI/AdvancedAnimations/FifthAdvancedAnimation"
import CurvedMotion from "../shared/UI/AdvancedAnimations/FirstAdvancedAnimation"
import DelayedSync from "../shared/UI/AdvancedAnimations/FourAdvancedAnimation"
import Parallax from "../shared/UI/AdvancedAnimations/SecondAdvanedAnimation"
import ControlledAnimation from "../shared/UI/AdvancedAnimations/ThirdAdvancedAnimation"
import FifthAnimation from "../shared/UI/FifthAnimation"
import FirstAnimation from "../shared/UI/FirstAnimation"
import FourAnimation from "../shared/UI/FourAnimation"
import SecondAnimation from "../shared/UI/SecondAnimation"
import ThirdAnimation from "../shared/UI/ThirdAnimation"

const Home = () => {
  return (
    <div>
      <FirstAnimation />
      <SecondAnimation />
      <ThirdAnimation />
      <FourAnimation />
      <FifthAnimation />

      <CurvedMotion />
      <Parallax />
      <ControlledAnimation />
      <DelayedSync />
      <InteractiveGesture />
    </div>
  )
}

export default Home
