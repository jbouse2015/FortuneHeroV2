using UnityEngine;
using System.Collections;

public class spearForward : MonoBehaviour {

	public SpearAttack _attackAnimation;
	
	// Update is called once per frame
	void Update () {

		if(Input.GetKeyDown ("d")){
			_attackAnimation.spearAttack();
		}
		_attackAnimation.reset ();
	}
}
