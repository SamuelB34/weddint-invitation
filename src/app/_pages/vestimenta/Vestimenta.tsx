import styles from "./vestimenta.module.scss"
import Image from "next/image"
import { useEffect, useRef } from "react"

export const Vestimenta = ({ id }: { id: string }) => {
	const paragraphRef = useRef<any>(null)
	const inspirationRef = useRef<any>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0]
				if (firstEntry && firstEntry.isIntersecting) {
					if (paragraphRef.current) {
						paragraphRef.current.classList.add(styles["paragraph__animation"])
					}
					if (inspirationRef.current) {
						inspirationRef.current.classList.add(styles["paragraph__animation"])
					}
				}
			},
			{ threshold: 0.1 } // Ajusta el umbral según lo que necesites (0.1 es el 10% visible)
		)

		if (paragraphRef.current) {
			observer.observe(paragraphRef.current)
		}

		if (inspirationRef.current) {
			observer.observe(inspirationRef.current)
		}

		return () => {
			if (paragraphRef.current) {
				observer.unobserve(paragraphRef.current)
			}
			if (inspirationRef.current) {
				observer.unobserve(inspirationRef.current)
			}
		}
	})

	return (
		<section className={styles.container} id={id}>
			<div className={styles.outfits_container}>
				<Image
					src={"/vestimenta/female-outfit.svg"}
					alt={"fem"}
					width={315}
					height={315}
					className={styles.img}
				/>
				<Image
					src={"/vestimenta/male-outfit.svg"}
					alt={"male"}
					width={315}
					height={315}
					className={styles.img}
				/>
			</div>
			<span className={styles.title}>vESTIMEnTa</span>

			<div className={styles.atuendo}>
				<span>ATUENDO FORMAL</span>
				<div className={styles.atuendo__line}></div>
				<span>COLOR NEGRO</span>
			</div>

			<span className={styles.paragraph} ref={paragraphRef}>
				¡Queremos lograr fotos cohesivas ese dia! Les pedimos por favor respeten
				nuestra elección.
			</span>
			<span className={styles.paragraph} ref={inspirationRef}>
				¿Búscas inspiración? <br />
				<a href="https://www.google.com" target={"_blank"}>
					¡Haz click aquí para ideas!
				</a>
			</span>
		</section>
	)
}
