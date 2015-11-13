using UnityEngine;
using System.Collections;

public class raycastForward : MonoBehaviour {

	public attackAnimation _attackAnimation;
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyDown ("w")){
			_attackAnimation.attack();
		}
		_attackAnimation.reset ();
	}
}
