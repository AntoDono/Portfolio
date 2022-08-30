import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap"

export default ({}, inject) => {
  gsap.registerPlugin(ScrollTrigger)
  inject('gsap', gsap)
}