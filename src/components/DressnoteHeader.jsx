import React from "react";
import "../components/mainpage/scss/DressnoteHeader.scss";
import HeaderBtn from "./HeaderBtn";
const DressnoteHeader = () => {
	return (
		<div className="container">
			<div className="Dress__block">
				<svg
					className="dress__img"
					xmlns="http://www.w3.org/2000/svg"
					width="164"
					height="16"
					fill="none"
				>
					<path
						fill="#fff"
						d="M6.103 15.78c5.245 0 8.423-2.934 8.423-7.799 0-4.85-3.178-7.768-8.373-7.768H0V15.78h6.103ZM3.64 12.96V3.033h2.32c3.228 0 4.934 1.49 4.934 4.948 0 3.474-1.706 4.979-4.942 4.979H3.64ZM20.3 15.78h3.64V10.26h2.655l3.262 5.519h4.018l-3.657-6.05c1.96-.76 3.043-2.304 3.043-4.432 0-3.094-2.26-5.085-6.17-5.085H20.3V15.78Zm3.64-8.164V2.904h2.454c2.101 0 3.118.843 3.118 2.394 0 1.543-1.017 2.318-3.102 2.318h-2.47ZM38.911 15.78h11.634v-2.714h-7.994V9.349h7.364V6.636H42.55v-3.71h7.96V.213h-11.6V15.78ZM65.822 4.69h3.488C69.26 1.915 66.738 0 62.905 0c-3.775 0-6.54 1.885-6.523 4.713-.009 2.295 1.782 3.61 4.69 4.24l1.875.427c1.874.41 2.917.896 2.925 1.945-.008 1.14-1.202 1.916-3.051 1.916-1.892 0-3.253-.79-3.371-2.349h-3.522C56.02 14.26 58.685 16 62.863 16c4.203 0 6.674-1.817 6.683-4.667-.009-2.592-2.17-3.968-5.162-4.576l-1.546-.334c-1.497-.312-2.75-.814-2.724-1.93 0-1.004.984-1.741 2.766-1.741 1.74 0 2.807.714 2.942 1.938ZM84.41 4.69H87.9C87.849 1.915 85.327 0 81.493 0c-3.774 0-6.54 1.885-6.523 4.713-.008 2.295 1.782 3.61 4.691 4.24l1.875.427c1.874.41 2.916.896 2.925 1.945-.008 1.14-1.202 1.916-3.052 1.916-1.89 0-3.253-.79-3.37-2.349h-3.523C74.61 14.26 77.274 16 81.451 16c4.204 0 6.675-1.817 6.683-4.667-.008-2.592-2.168-3.968-5.161-4.576l-1.547-.334c-1.496-.312-2.749-.814-2.723-1.93 0-1.004.983-1.741 2.765-1.741 1.74 0 2.808.714 2.942 1.938ZM107.858.213h-1.547v13.05h-.134L95.972.214H94.45V15.78h1.572V2.744h.134l10.172 13.036h1.53V.213ZM129.626 7.996c0-4.872-3.093-7.996-7.448-7.996-4.346 0-7.439 3.132-7.439 7.996 0 4.865 3.085 7.996 7.439 7.996 4.355 0 7.448-3.124 7.448-7.996Zm-1.53 0c.009 4.188-2.522 6.659-5.918 6.659-3.404 0-5.918-2.486-5.918-6.659 0-4.196 2.539-6.658 5.918-6.658 3.396 0 5.918 2.47 5.918 6.658ZM134.746 1.49h5.456v14.29h1.572V1.49h5.455V.213h-12.483V1.49ZM153.845 15.78H164v-1.277h-8.583V8.627h7.885V7.35h-7.885V1.49h8.415V.213h-9.987V15.78Z"
					/>
				</svg>

				<div className="dressnote__group"></div>
				<HeaderBtn></HeaderBtn>
			</div>
		</div>
	);
};

export default DressnoteHeader;
