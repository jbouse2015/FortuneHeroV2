using UnityEngine;
using System.Collections;

public class BulletCollision : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnCollisionEnter(Collision collision){
		Debug.Log ("Enter collision");
		if(collision.gameObject.name != null)
			Destroy (this.gameObject);
	}

	void OnCollisionEnter2D(Collision2D coll) {
		Debug.Log ("Enter collision 2D");



		if(coll.gameObject.name != "Player")
			Destroy (this.gameObject);
		
	}
}
