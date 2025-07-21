import * as React from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckboxDemo = () => (
	<form>
		<div className="flex items-center">
			<Checkbox.Root
				className="flex border border-[#BED6FF] size-[20px] appearance-none items-center justify-center rounded bg-transparent shadow-[0_1px_1px] shadow-[#BED6FF] outline-none focus:shadow-[0_0_0_1px_white]"
				defaultChecked
				id="c1"
			>  
				<Checkbox.Indicator className="text-[#BED6FF]">
					<CheckIcon/>
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className="pl-[15px] text-[15px] leading-none text-white"
				htmlFor="c1"
			> 
				I agree to the <span className="text-blue-900">Terms & Conditions.</span> 
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
