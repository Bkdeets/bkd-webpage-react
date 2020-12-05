import React from "react";
import "../../tailwind.output.css";
import bioPhoto from "./../../assets/BioPhoto2.jpeg";
import resume from "./../../assets/resume.pdf"

const Main = () => {
	return (
		<div id="skills" className="w-full">
			<div
				id="top"
				className="w-full mx-auto px-32 pt-4 pb-4 flex flex-row flex-initial sm-max:px-0 sm-max:pt-0 sm-max:pb-0"
			>
				<div className="flex flex-col w-full mx-auto">
					<div className="pt-8 flex flex-row flex-1 flex-wrap w-full">
						<div className="w-3/12 sm-max:w-full">
							<img
								className="rounded-circle object-cover h-48 rounded-full sm-max:mx-auto sm-max:h-32"
								src={bioPhoto}
							/>
							{/* <img
								className="object-cover h-48 sm-max:mx-auto sm-max:h-32"
								src={bioRockPhoto}
							/> */}
						</div>
						<div className="w-9/12 sm-max:w-full sm-max:text-center">
							<div className="align-middle text-left sm-max:text-center">
								<div className="text-primary mt-4">
									<p className="text-lg text-left sm-max:text-center">
										Britton Deets
									</p>
									<p className="font-light text-sm">
										Associate Software Engineer at nCino
									</p>
									<div className="font-light my-4 sm-max:text-sm sm-max:px-4">
										<p>
											Full-Stack Software Engineer with
											two years of practical experience
											and a passion for new ideas, solving
											complex problems, and writing
											high-quality software
										</p>

										<div className="flex text-sm mt-4 flex-wrap sm-max:justify-center sm-max:text-xs">
											<a href="mailto:brittonkdeets@gmail.com">
												<p className="mx-2 sm-max:mx-1">
													brittonkdeets@gmail.com
												</p>
											</a>
											<a href="">
												<p className="mx-2 sm-max:mx-1">
													910-632-4594
												</p>
											</a>
											<a target="_blank" href="https://github.com/Bkdeets">
												<p className="mx-2 sm-max:mx-1">Github</p>
											</a>
											<a target="_blank" href="https://www.linkedin.com/in/brittondeets/">
												<p className="mx-2 sm-max:mx-1">LinkedIn</p>
											</a>
											<a href={resume} download="BrittonDeets_Resume">
												<p className="mx-2 sm-max:mx-1">Resume</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default Main;
