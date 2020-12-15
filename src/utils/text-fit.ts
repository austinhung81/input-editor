export default function textFit(str: string): number {
  const container = document.createElement('span');
  container.style.visibility = 'hidden';
  container.style.position = 'absolute';
  container.style.top = '-999999px';
  container.innerHTML = str;
  document.body.appendChild(container);
  return container.clientWidth;
}