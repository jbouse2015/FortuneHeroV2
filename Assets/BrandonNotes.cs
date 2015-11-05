/*

Player Animations are only for left and right walking because it is pure 2D scroller

This is location of the tutorial that I used for this feature

http://michaelcummings.net/mathoms/creating-2d-animated-sprites-using-unity-4-3

Animations need to be hooked up to the player controller. Here is the code to start using it.
This needs to be inserted into the Player Controller script.

public class PlayerController : MonoBehavior {

    private Animator animator;

    // Use this for initialization
    void Start() {
        animator = this.GetComponent(Animator>();
    }

    // Update is called once per frame, might need FixedUpdate to normalize

    void Update() {

        var horizontal = Input.GetAxis("Horizontal");

        // 1 is for walking right
        if ( horizontal < 0 ) {
            animator.SetInteger("Direction", 1);
        // 2 is for walking left
        } else {
            animator.SetInteger("Direction", 2);
        }
    }
}



*/

