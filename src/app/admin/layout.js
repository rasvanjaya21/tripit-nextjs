import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function AdminLayout({ children }) {
	return (
		<div>
			<SideBar />
			<main className="flex h-screen flex-col pl-[355px] pt-6">{children}</main>
		</div>
	);
}

export default AdminLayout;