import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap"

export default ({ app }, inject) => {
  gsap.registerPlugin(ScrollTrigger)
  inject('gsap', gsap)
}