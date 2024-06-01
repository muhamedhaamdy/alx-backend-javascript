export default function guardrail(mathFunction) {
  let q = [];
  
  try {
    q.push(mathFunction());
  } catch (err) {
    q.push(String(err));
  } finally {
    q.push('Guardrail was processed');
  }
  return q;
}
