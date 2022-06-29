import { useRouter } from "next/router"

export default function AboutPage() {
  const router = useRouter()
  const {slug }= router.query;
  return  <div>About us: {slug}</div>
}