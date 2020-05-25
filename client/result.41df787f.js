import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, q as query_selector_all, d as detach, c as claim_space, b as claim_element, f as children, g as claim_text, j as insert, k as append, n as noop } from './client.b850d751.js';

/* src/routes/calculate/result.svelte generated by Svelte v3.22.3 */

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;

	return {
		c() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Result this site");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'about' page. There's not much here.");
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Result this site");
			h1_nodes.forEach(detach);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(detach);
			this.h();
		},
		h() {
			document.title = "About";
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(h1);
			if (detaching) detach(t2);
			if (detaching) detach(p);
		}
	};
}

class Result extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Result;