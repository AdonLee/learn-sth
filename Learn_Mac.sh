#otool:	用于操纵Mach－O文件的原生工具－－可以替代unix提供的ldd或readelf 之类工具提供的功能
	[adonlee@Yizhi example]$ otool -hV /bin/ls
	/bin/ls:
	Mach header
	      magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
	MH_MAGIC_64  X86_64        ALL LIB64     EXECUTE    19       1816   NOUNDEFS DYLDLINK TWOLEVEL PIE

	[adonlee@Yizhi example]$ otool -hV /System/Library/QuickLook/PDF.qlgenerator/Contents/MacOS/PDF 
	/System/Library/QuickLook/PDF.qlgenerator/Contents/MacOS/PDF:
	Mach header
	      magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
	MH_MAGIC_64  X86_64        ALL  0x00      BUNDLE    22       2808   NOUNDEFS DYLDLINK TWOLEVEL

export DYLD_PRINT_SEGMENTS=1 #让连接器在命令执行时打印LC_SEGMENTS命令