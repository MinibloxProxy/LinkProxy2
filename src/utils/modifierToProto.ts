import { PBModifier } from "@miniblox/protocol";
import { AttributeModifier } from "@miniblox/physics";

export default function toProto(am: AttributeModifier): PBModifier {
	return new PBModifier({
		amount: am.amount,
		id: am.id,
		operation: am.operation,
	});
}
