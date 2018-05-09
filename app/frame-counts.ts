export function frameCounts(state: string): number {
  switch(state) {
    case 'a0': return 14;
    case 'a1': return 13;
    case 'a2': return 7;
    case 'a3': return 6;
    case 'a4': return 9;
    case 'a5': return 11;
    case 'b0': return 18;
    case 'b1': return 11;
    case 'b2': return 6;
    case 'b3': return 9;
    case 'b4': return 7;
    case 'i0': return 10;
    case 'i1': return 9;
    case 'i2': return 8;
    case 'i3': return 6;
    case 'i4': return 7;
    case 'i5': return 6;
    case 'i6': return 7;
    case 't0': return 10;
    case 't1': return 19;
    case 't2': return 14;
    case 't3': return 10;
    case 't4': return 12;
    case 't5': return 9;
    case 't6': return 6;
    default: return 0;
  }
}
