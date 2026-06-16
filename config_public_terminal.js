export const diskImageUrl = "LOCAL_OR_CLOUD_IMAGE.ext2";
export const diskImageType = "cloud";

export const printIntro = false;
export const needsDisplay = true;

export const cmd = "/usr/bin/startxfce4";
export const args = [];

export const opts = {
	env: [
		"HOME=/root",
		"TERM=xterm",
		"USER=root",
		"SHELL=/bin/bash",
		"EDITOR=vim",
		"LANG=en_US.UTF-8",
		"LC_ALL=C",
		"DISPLAY=:0"
	],
	cwd: "/root",
	uid: 0,
	gid: 0
};
