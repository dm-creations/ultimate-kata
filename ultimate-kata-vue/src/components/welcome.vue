<template>
    <div class="welcome">
        <div class="hero">
            <h2>Practice the actions of professional developers</h2>
        </div>
        <div class="courses">
            <router-link class="card course" :to="{ name: 'lesson021' }">
                <h4>Build a portfolio website in 27 steps</h4>
                <div class="levels">
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">No Framework</p>
                        </div>
                    </div>
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">With Bootstrap 4</p>
                        </div>
                    </div>
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">With Tailwind Css</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="card course">
                <h4>Add transitions and Animations to a website</h4>
                <div class="levels">
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">CSS only</p>
                        </div>
                    </div>
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">CSS and Javascript</p>
                        </div>
                    </div>
                    <div class="level">
                        <div class="checkbox">
                            <div class="check-bg"></div>
                            <div class="tick"></div>
                        </div>
                        <div class="level-desc">
                            <p class="info">lvl 1 - Time: <span>00:00</span></p>
                            <p class="level-name">GreenSock Framework</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'welcome'
    }
</script>

<style scoped>
.welcome {
    width: 100%;
}
.hero {
    width: 100%;
    height: 300px;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
.courses {
    max-width: 1024px;
    padding: 20px 0;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
}
.card {
    max-width: 300px;
    background-color: lightgray;
    border-radius: 5px;
    padding: 30px;
    text-transform: uppercase;
}
.levels {
    text-align: left;
}
.level {
    display: block;
}
.checkbox {
    display: inline-block;
    width: 40px;
    height: 40px;
}
.check-bg {
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 4px;
}
.level-desc {
    display: inline-block;
    margin-left: 7px;
}
</style>