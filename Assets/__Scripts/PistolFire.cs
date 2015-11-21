using UnityEngine;
using System.Collections;

public class PistolFire : MonoBehaviour {
	public GameObject bulletPrefab;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

		if(Input.GetKeyDown ("a")){

			GameObject bullet = Instantiate(bulletPrefab, transform.position, transform.rotation) as GameObject;
			Rigidbody speed = bullet.GetComponent<Rigidbody>();

			speed.velocity = transform.right*15;
		}
	}
}
