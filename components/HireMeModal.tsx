import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';

function HireMeModal({ onClose, onRequest }:any) {
	const form = useRef(null);

	const senRequest = (event:any) => {
		event.preventDefault()
		onRequest({sentReq : form.current})
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-30"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
			{/* Modal Content */}
			<main className="flex flex-col px-3 items-center justify-center w-full h-full">
				<div className="modal-wrapper flex items-center w-full h-full justify-center z-30">
					<div className="modal w-full max-w-md  xl:max-w-xl lg:max-w-xl md:max-w-xl bg-[#ffffff] dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className="text-primary-dark dark:text-primary-light text-xl">
								CONTACT FORM
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full max-h-[80vh] overflow-auto">
							<form
								ref={form}
								onSubmit={(e) => {senRequest(e)}}
								className="max-w-xl m-4 text-left"
							>
								<div className="">
									<input
										className="w-full px-5 py-2 border focus:outline-none focus:border-[#6bfaae] focus:ring-1 focus:ring-[#6bfaae]  dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required
										placeholder="Your Name"
										aria-label="Name"
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border focus:outline-none focus:border-[#6bfaae] focus:ring-1 focus:ring-[#6bfaae] dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="email"
										required
										placeholder="Your Email"
										aria-label="Email"
									/>
								</div>
								
								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border focus:outline-none focus:border-[#6bfaae] focus:ring-1 focus:ring-[#6bfaae] dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols={14}
										rows={6}
										aria-label="Details"
										required
										placeholder="Description"
									></textarea>
								</div>

								<div className="mt-6 sm:pb-1 flex justify-end">
									<button
										type="submit"
										className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-[#404141] font-bold
											bg-gradient-to-br from-[#6bfaae] to-[#8decde]
											rounded-md"
										aria-label="Submit Request"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
						
					</div>
				</div>
			</main>
		</motion.div>
	);
}

export default HireMeModal;
