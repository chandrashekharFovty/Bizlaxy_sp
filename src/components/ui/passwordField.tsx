import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";


const PasswordToggleFieldDemo = function(){
     
  
	return (
	<PasswordToggleField.Root>
		<div className="flex items-center w-[104%]">
			<PasswordToggleField.Input placeholder="Enter your password"  className="outline-[#BED6FF] placeholder-white bg-transparent text-white font-medium border border-[#BED6FF] rounded-xl px-4 text-[16px] w-full h-[56px] " />
			<PasswordToggleField.Toggle className="all-[unset] box-border h-[18px] text-[15px] text-inherit leading-[1] flex items-center justify-center aspect-[1/1] rounded-[0.5px] focus-visible:outline-[2px] focus-visible:outline-accent-9 focus-visible:outline-offset-[2px]">
				<PasswordToggleField.Icon className="-ml-16 relative"
					visible={<EyeOpenIcon className="w-5 h-5 cursor-pointer"/>}
					hidden={<EyeClosedIcon className="w-5 h-5 cursor-pointer"/>}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);
} 

export default PasswordToggleFieldDemo;
