export default class DOM {
	static render(component) {
		const oldNode = component.targetEl;
		const newNode = oldNode.cloneNode(true);
		newNode.innerHTML = component.render();
	
		DOM.update(oldNode, newNode);
		requestAnimationFrame(() => component.afterRender());
	}
	
	static update(oldNode, newNode) {
		const oldChildNodes = [ ...oldNode.childNodes ];
		const newChildNodes = [ ...newNode.childNodes ];
		const maxLen = Math.max(oldChildNodes.length, newChildNodes.length);
		for (let i = 0; i < maxLen; ++i)
			DOM.diff(oldNode, oldChildNodes[i], newChildNodes[i]);
	}
	
	static diff(parNode, oldNode, newNode) {
		// Case: Either oldNode or newNode doesn't exist
		if (!newNode && oldNode) oldNode.remove();
		else if (newNode && !oldNode) parNode.appendChild(newNode);
	
		// Case: Both are Text nodes
		else if (newNode instanceof Text && oldNode instanceof Text) {
			if (newNode.nodeValue !== oldNode.nodeValue)
				oldNode.nodeValue = newNode.nodeValue;
		}
	
		// Case: Different element type
		else if (newNode.nodeName !== oldNode.nodeName) {
			parNode.insertBefore(newNode, oldNode);
			oldNode.remove();
		}
		
		// Case: Only element attributes are different
		else {
			for (let {name, value} of [ ...newNode.attributes ]) {
				if (value !== oldNode.getAttribute(name)) {
					oldNode.setAttribute(name, value);
				}
			}
			for (let {name} of [ ...oldNode.attributes ]) {
				if (!newNode.getAttribute(name)) {
					oldNode.removeAttribute(name);
				}
			}
			// Also update children
			DOM.update(oldNode, newNode);
		}
	}
}