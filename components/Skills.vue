<template>
    <div class="flex flex-wrap gap-x-10 gap-y-5 justify-center" ref="skills">
        <div ref="draw"/>
    </div>
</template>

<script>
import Matter from "matter-js"

export default {
    data() {
        return {
            skills: [
                { name: "Python", img_name: "python", percent: 1, level: "Proficient" },
                { name: "Java", img_name: "java", percent: 0.6, level: "Intermediate" },
                { name: "JavaScript", img_name: "javascript", percent: 1, level: "Proficient" },
                { name: "C#", img_name: "csharp", percent: 0.5, level: "Intermediate" },
                { name: "C++", img_name: "cpp", percent: 1, level: "Proficient" },
                { name: "R", img_name: "r", percent: 0.5, level: "Intermediate" },
                { name: "Html", img_name: "html", percent: 1, level: "Proficient" },
                { name: "CSS", img_name: "css", percent: 1, level: "Proficient" },
                { name: "Vue", img_name: "vue", percent: 1, level: "Proficient" },
                { name: "React", img_name: "react", percent: 1, level: "Proficient" },
                { name: "Nuxt", img_name: "nuxt", percent: 1, level: "Proficient" },
                { name: "MongoDB", img_name: "mongodb", percent: 1, level: "Proficient" },
                { name: "Nginx", img_name: "nginx", percent: 1, level: "Proficient" },
                { name: "Typescript", img_name: "typescript", percent: 0.5, level: "Intermediate" },
                { name: "Graphql", img_name: "graphql", percent: 0.5, level: "Intermediate" },
            ],
            engine: null,
            render: null,
            runner: null,
            skill_width: 128,
            skill_height: 128,
            png_width_px: 256,
            png_height_px: 256,
            skill_gap_x: 30,
            skill_gap_y_initial: 10,
            start_x: 0,
            start_y: 100,
            width:  0.5 * window.innerWidth,
            height: 0.75 * window.innerHeight,
            right: null,
            left: null,
            ceiling: null,
            ground: null,
            previousWidth: null
        }
    },
    methods:{
        createSkills(){
            let boxes = []
            let x = this.start_x
            let y = this.height/2+this.skill_gap_y_initial
        
            for (let skill of this.skills){
                boxes.push(Matter.Bodies.rectangle(x, y, this.skill_width, this.skill_height, {
                    render: {
                        sprite: {
                            texture: `../assets/images/skills/${skill.img_name.toLowerCase()}.png`,
                            xScale: this.skill_width / this.png_width_px,
                            yScale: this.skill_height / this.png_height_px
                        }
                    }
                }))
                x+=this.skill_width + this.skill_gap_x
                if (x > this.width) {
                    x = this.start_x
                    y -= this.skill_height
                }
            }

            return boxes
        },
        resize(){
            this.width = 0.5 * window.innerWidth
            this.height = 0.75 * window.innerHeight
            this.render.bounds.max.x = this.width;
            this.render.bounds.max.y = this.height;
            this.render.options.width = this.width;
            this.render.options.height = this.height;
            this.render.canvas.width = this.width;
            this.render.canvas.height = this.height;
            Matter.Body.set(this.right, "position", {x: this.width+10, y: this.height/2})
            Matter.Body.scale(this.ground, this.previousWidth/this.width, 1)
            this.previousWidth = this.width
        }
    },
    mounted() {
        // module aliases
        // var Engine = Matter.Engine,
        //     Render = Matter.Render,
        //     Runner = Matter.Runner,
        //     Bodies = Matter.Bodies,
        //     Composite = Matter.Composite,
        //     Mouse = Matter.Mouse,
        //     MouseConstraint = Matter.MouseConstraint
        window.addEventListener("resize", this.resize)
        this.previousWidth = this.width

        // create an engine
        this.engine = Matter.Engine.create();

        // create a renderer
        this.render = Matter.Render.create({
            element: this.$refs['draw'],
            engine: this.engine,
            options: {
                width: this.width,
                height: this.height,
                wireframes: false,
                background: '#111'
            },
        });

        // create two boxes and a ground

        this.ground = Matter.Bodies.rectangle(this.width/2, this.height, this.width, 60, { isStatic: true, label: "ground", fillStyle: 'red' });
        this.ceiling = Matter.Bodies.rectangle(this.width/2, 0, this.width, 60, { isStatic: true, label: "ceiling" });
        this.left = Matter.Bodies.rectangle(-10, this.height/2, 100, this.height, { isStatic: true, label: "left" });
        this.right = Matter.Bodies.rectangle(this.width+10, this.height/2, 100, this.height, { isStatic: true, label: "right" });

        var mouse = Matter.Mouse.create(this.$refs['draw'])
        var mConstraint = Matter.MouseConstraint.create(this.engine,{
            mouse
        })

        // add all of the bodies to the world
        Matter.Composite.add(this.engine.world, mConstraint)
        Matter.Composite.add(this.engine.world, [this.ground, this.left, this.right, this.ceiling].concat(this.createSkills()));

        // run the renderer
        Matter.Render.run(this.render);

        // create runner
        this.runner = Matter.Runner.create();

        // run the engine
        Matter.Runner.run(this.runner, this.engine);
    },
}
</script>