using UnityEngine;
using System.Collections;

public class SpearAttack : MonoBehaviour {
	//public Sprite spear;
	public bool throwSpear = false;
	public bool animationPlayed = false;
 	public float thrust = 10.0f;
	public int frameCount = 0;
	public GameObject spear;
	public Rigidbody2D rigid;
	public void spearAttack(){
		GetComponent<Animation> ().Play ("spearAttack");
		animationPlayed = true;
		//GetComponent<Animation>()["macheteSwing"].speed = -1;
		//GetComponent<Animation> () ["macheteSwing"].time = 0;
		//GetComponent<Animation> ().Play ("macheteIdle");
	}
	
	public void reset(){
		if(GetComponent<Animation>().IsPlaying("spearAttack")){
			throwSpear = false;
		}
		if(!GetComponent<Animation>().IsPlaying("spearAttack") && animationPlayed){
			throwSpear = true;
		}
		if(throwSpear){
			//GetComponent<Rigidbody2D>().AddForce(new Vector2(Input.GetAxis("Horizontal"), 1.0f));
			//GetComponent<Rigidbody2D>().AddForce(10,10,10);
			//rigid.AddForce(-transform.right * 1);
			animationPlayed = false;
			frameCount = frameCount + 1;

			//GetComponent<Animation>().Play("spearIdle");
		}

		if (frameCount == 10) {
			//GameObject newSpear = Instantiate(this.gameObject) as GameObject;

			GameObject clone;
			Rigidbody2D speed;
			clone = Instantiate(spear, transform.position, transform.rotation) as GameObject;
			speed = clone.GetComponent<Rigidbody2D>();
			speed.velocity = -transform.right*15;
			//newSpear.transform.position = Vector2.zero;
			//newSpear.transform.GetComponent<Rigidbody2D>();
			//newSpear.transform.GetComponent<Rigidbody2D>().AddForce(-transform.right*-1);
			//newSpear.transform.GetComponent<Rigidbody2D>().velocity = -transform.right;
			//newSpear.transform.GetComponent<Rigidbody2D>().angularVelocity = 0;

			//Destroy(this.gameObject,10);
			Destroy(clone,1);
			frameCount = 0;
			throwSpear = false;

		}

	}
}
