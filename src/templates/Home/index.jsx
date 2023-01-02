import { Base } from '../Base';
import { mockBases } from '../Base/mock';

export default function Home() {
  return <Base {...mockBases} />;
}
